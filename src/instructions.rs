use crate::error::SymError;
use crate::parse::Line;

#[derive(Debug, Clone, Copy)]
pub enum Instruction {
    // Stack
    Push(u8), // 0
    Pop,      // _
    Dup,      // @
    Swap,     // &
    // Arithmetic
    Add, // +
    Sub, // -
    Mul, // *
    Div, // /
    Mod, // %
    // Comparsion
    Eq, // =
    Gt, // >
    Lt, // <
    // Control
    Jmp(usize), // ^10
    Jz(usize),  // |10
    Jnz(usize), // ~10
    Halt,       // ;
    // IO
    In,  // ?
    Out, // !
    // Debug
    DebugIn,  // $?
    DebugOut, // $!
    None,
}

impl Instruction {
    fn instruction_from_string(input: String) -> Result<Instruction, SymError> {
        match input.as_str() {
            // Stack operations
            "_" => Ok(Instruction::Pop),
            "@" => Ok(Instruction::Dup),
            "&" => Ok(Instruction::Swap),
            // Arithmetic operations
            "+" => Ok(Instruction::Add),
            "-" => Ok(Instruction::Sub),
            "*" => Ok(Instruction::Mul),
            "/" => Ok(Instruction::Div),
            "%" => Ok(Instruction::Mod),
            // Comparison operations
            "=" => Ok(Instruction::Eq),
            ">" => Ok(Instruction::Gt),
            "<" => Ok(Instruction::Lt),
            // Control operations
            ";" => Ok(Instruction::Halt),
            "?" => Ok(Instruction::In),
            "!" => Ok(Instruction::Out),
            "$?" => Ok(Instruction::DebugIn),
            "$!" => Ok(Instruction::DebugOut),
            // Handle numeric push or control flow instructions
            "" => Ok(Instruction::None),
            s if s.chars().next().is_some_and(|c| c.is_ascii_digit()) => s
                .parse::<u8>()
                .map(|n| Instruction::Push(n))
                .map_err(|_| SymError::UnknownInstruction(s.to_string())),
            // Check for control flow instructions like ^num, |num, ~num
            s if s.starts_with('^') => s[1..]
                .parse::<usize>()
                .map(|n| Instruction::Jmp(n))
                .map_err(|_| SymError::UnknownInstruction(s.to_string())),

            s if s.starts_with('|') => s[1..]
                .parse::<usize>()
                .map(Instruction::Jz)
                .map_err(|_| SymError::UnknownInstruction(s.to_string())),

            s if s.starts_with('~') => s[1..]
                .parse::<usize>()
                .map(Instruction::Jnz)
                .map_err(|_| SymError::UnknownInstruction(s.to_string())),
            s => Err(SymError::UnknownInstruction(s.to_string())),
        }
    }

    pub fn instructions_from_strings(lexed_code: Vec<Vec<String>>) -> Result<Vec<Line>, SymError> {
        let mut parsed_code: Vec<Line> = Vec::new();

        for line in lexed_code {
            parsed_code.push(if line.first().is_some_and(|s| s.starts_with('#')) {
                Line::Comment
            } else if line.first().is_none() {
                Line::None
            } else {
                let mut instructions: Vec<Instruction> = Vec::new();
                for s in line {
                    // For each string in the line, convert it to an Instruction
                    let instruction = Instruction::instruction_from_string(s)?;
                    instructions.push(instruction);
                }
                // Create a Line::Instruction variant containing the parsed instructions
                Line::Instructions(instructions)
            });
        }

        Ok(parsed_code)
    }
}

#[cfg(test)]
mod tests {
    //use super::*;
    /*
    use crate::instructions::Instruction::*;
    use crate::parse::Line::Instructions;

    #[test]
    fn test_instructions_from_strings() {
        let code: Vec<Vec<String>> =
            [["0 256 1000 -1 a _ @& @ & + - * / % = > < ^10 ^100 ^-1 |10 ~10 ;; ; ? ! $"]];
        let tokens = Instruction::instructions_from_strings(code);
        assert_eq!([Instructions(Push(0))], tokens);
    }
    */
}
