use crate::error::SymError;
use crate::utils;
use crate::{instructions::Instruction, parse::Line};

pub struct VM {
    //stack: [u8; 255],
    stack: Vec<u8>,
    pc: usize,
    program: Vec<Line>,
    running: bool,
}

impl VM {
    pub fn new(program: Vec<Line>) -> Self {
        Self {
            //stack: [0; 255],
            stack: Vec::new(),
            pc: 0,
            program,
            running: true,
        }
    }

    pub fn run(&mut self) -> Result<(), SymError> {
        while self.running && self.pc < self.program.len() {
            self.pc += 1;
            let instruction = self.program[self.pc - 1].clone();
            self.execute_line(instruction)?;
        }
        Ok(())
    }

    fn execute_line(&mut self, instructions: Line) -> Result<(), SymError> {
        if let Line::Instructions(instructions) = instructions {
            for instruction in instructions {
                self.execute(instruction)?;
            }
        }
        Ok(())
    }

    fn binary_op<F>(&mut self, op: F) -> Result<(), SymError>
    where
        F: FnOnce(u8, u8) -> u8,
    {
        let a = self.stack.pop().ok_or(SymError::StackUnderflow)?;
        let b = self.stack.pop().ok_or(SymError::StackUnderflow)?;
        self.stack.push(op(a, b));
        Ok(())
    }

    fn execute(&mut self, instruction: Instruction) -> Result<(), SymError> {
        match instruction {
            Instruction::Push(num) => {
                self.stack.push(num);
                Ok(())
            }
            Instruction::Pop => self.stack.pop().ok_or(SymError::StackUnderflow).map(|_| ()),
            Instruction::Dup => {
                let a = *self.stack.last().ok_or(SymError::StackUnderflow)?;
                self.stack.push(a);
                Ok(())
            }
            Instruction::Swap => {
                let a = self.stack.pop().ok_or(SymError::StackUnderflow)?;
                let b = self.stack.pop().ok_or(SymError::StackUnderflow)?;
                self.stack.push(a);
                self.stack.push(b);
                Ok(())
            }
            Instruction::Add => Ok(self.binary_op(|a, b| a + b)?),
            Instruction::Sub => Ok(self.binary_op(|a, b| b - a)?),
            Instruction::Mul => Ok(self.binary_op(|a, b| a * b)?),
            Instruction::Div => Ok(self.binary_op(|a, b| b / a)?),
            Instruction::Mod => Ok(self.binary_op(|a, b| b % a)?),
            Instruction::Eq => Ok(self.binary_op(|a, b| if a == b { 1 } else { 0 })?),
            Instruction::Gt => Ok(self.binary_op(|a, b| if b > a { 1 } else { 0 })?),
            Instruction::Lt => Ok(self.binary_op(|a, b| if b < a { 1 } else { 0 })?),
            Instruction::Jmp(i) => {
                self.pc = i - 1;
                Ok(())
            }
            Instruction::Jz(i) => {
                if self.stack.pop().ok_or(SymError::StackUnderflow)? == 0 {
                    self.pc = i - 1;
                }
                Ok(())
            }
            Instruction::Jnz(i) => {
                if self.stack.pop().ok_or(SymError::StackUnderflow)? != 0 {
                    self.pc = i - 1;
                }
                Ok(())
            }
            Instruction::Halt => {
                self.running = false;
                Ok(())
            }
            Instruction::In => {
                self.stack.push(utils::input_from_char()?);
                Ok(())
            }
            Instruction::Out => {
                let a = self.stack.pop().ok_or(SymError::StackUnderflow)?;
                utils::out_as_char(a);
                Ok(())
            }
            Instruction::DebugIn => {
                self.stack.push(utils::input_from_u8()?);
                Ok(())
            }
            Instruction::DebugOut => {
                let a = self.stack.pop().ok_or(SymError::StackUnderflow)?;
                utils::out_as_u8(a);
                Ok(())
            }
            Instruction::None => Ok(()),
        }
    }
}
