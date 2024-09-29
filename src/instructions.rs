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
    Debug, // $
    None,
}

impl Instruction {
    fn instruction_from_string(input: String) -> Instruction {
        match input.as_str() {
            // Stack operations
            "_" => Instruction::Pop,
            "@" => Instruction::Dup,
            "&" => Instruction::Swap,
            // Arithmetic operations
            "+" => Instruction::Add,
            "-" => Instruction::Sub,
            "*" => Instruction::Mul,
            "/" => Instruction::Div,
            "%" => Instruction::Mod,
            // Comparison operations
            "=" => Instruction::Eq,
            ">" => Instruction::Gt,
            "<" => Instruction::Lt,
            // Control operations
            ";" => Instruction::Halt,
            "?" => Instruction::In,
            "!" => Instruction::Out,
            "$" => Instruction::Debug,
            // Handle numeric push or control flow instructions
            s => {
                if s.is_empty() {
                    Instruction::None
                } else if s.chars().next().is_some_and(|c| c.is_ascii_digit()) {
                    // Parse push instruction when the string is a number
                    if let Ok(num) = s.parse::<u8>() {
                        Instruction::Push(num)
                    } else {
                        Instruction::None
                    }
                } else {
                    // Check for control flow instructions like ^num, |num, ~num
                    match s.chars().next() {
                        Some('^') => {
                            if let Ok(num) = s[1..].parse::<usize>() {
                                Instruction::Jmp(num)
                            } else {
                                Instruction::None
                            }
                        }
                        Some('|') => {
                            if let Ok(num) = s[1..].parse::<usize>() {
                                Instruction::Jz(num)
                            } else {
                                Instruction::None
                            }
                        }
                        Some('~') => {
                            if let Ok(num) = s[1..].parse::<usize>() {
                                Instruction::Jnz(num)
                            } else {
                                Instruction::None
                            }
                        }
                        _ => Instruction::None,
                    }
                }
            }
        }
    }

    pub fn instructions_from_strings(lexed_code: Vec<Vec<String>>) -> Vec<Line> {
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
                    let instruction = Instruction::instruction_from_string(s);
                    instructions.push(instruction);
                }
                // Create a Line::Instruction variant containing the parsed instructions
                Line::Instructions(instructions)
            });
        }

        parsed_code
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
