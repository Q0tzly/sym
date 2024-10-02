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

    pub fn run(&mut self) {
        while self.running {
            self.pc += 1;

            let instruction = self.program[self.pc - 1].clone();
            self.execute_line(instruction);

            if self.pc >= self.program.len() {
                self.running = false;
            }
        }
    }

    fn execute_line(&mut self, instructions: Line) {
        if let Line::Instructions(instructions) = instructions {
            for instruction in instructions {
                self.execute(instruction)
            }
        }
    }

    fn execute(&mut self, instruction: Instruction) {
        // Do Error handring at future
        match instruction {
            Instruction::Push(num) => self.stack.push(num),
            Instruction::Pop => {
                self.stack.pop().unwrap();
            }
            Instruction::Dup => {
                let a = self.stack.pop().unwrap();
                self.stack.push(a);
                self.stack.push(a);
            }
            Instruction::Swap => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                self.stack.push(a);
                self.stack.push(b);
            }
            Instruction::Add => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                self.stack.push(a + b);
            }
            Instruction::Sub => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                self.stack.push(b - a);
            }
            Instruction::Mul => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                self.stack.push(a * b);
            }
            Instruction::Div => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                self.stack.push(b / a);
            }
            Instruction::Mod => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                self.stack.push(b % a);
            }
            Instruction::Eq => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                let ret = if a == b { 1 } else { 0 };
                self.stack.push(ret);
            }
            Instruction::Gt => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                let ret = if b > a { 1 } else { 0 };
                self.stack.push(ret);
            }
            Instruction::Lt => {
                let a = self.stack.pop().unwrap();
                let b = self.stack.pop().unwrap();
                let ret = if b < a { 1 } else { 0 };
                self.stack.push(ret);
            }
            Instruction::Jmp(i) => {
                self.pc = i - 1;
            }
            Instruction::Jz(i) => {
                if self.stack.pop().unwrap() == 0 {
                    self.pc = i - 1;
                }
            }
            Instruction::Jnz(i) => {
                if self.stack.pop().unwrap() != 0 {
                    self.pc = i - 1;
                }
            }
            Instruction::Halt => {
                self.running = false;
            }
            Instruction::In => self.stack.push(utils::input_from_char()),
            Instruction::Out => {
                let a = self.stack.pop().unwrap();
                utils::out_as_char(a);
            }
            Instruction::DebugIn => self.stack.push(utils::input_from_u8()),
            Instruction::DebugOut => {
                let a = self.stack.pop().unwrap();
                utils::out_as_u8(a);
            }
            Instruction::None => (),
            /*
            _ => {
                println!("The Instruction is Unimplement.");
                ()
            }
            */
        }
    }
}
