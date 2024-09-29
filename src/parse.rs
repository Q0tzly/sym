use crate::instructions::Instruction;

#[derive(Debug, Clone)]
pub enum Line {
    Instructions(Vec<Instruction>),
    Comment,
    None,
}

pub struct Parser {
    raw_code: Vec<String>,
    code: Vec<Line>,
}

impl Parser {
    pub fn new(raw_code: Vec<String>) -> Self {
        Self {
            raw_code,
            code: Vec::new(),
        }
    }

    fn lexer(&self) -> Vec<Vec<String>> {
        let mut lexed_code: Vec<Vec<String>> = Vec::new();

        for line in &self.raw_code {
            let tokens: Vec<String> = line
                .split_ascii_whitespace()
                .map(|s| s.to_string())
                .collect();
            lexed_code.push(tokens);
        }
        lexed_code
    }

    pub fn parse(&mut self) {
        self.code = Instruction::instructions_from_strings(self.lexer());
    }

    pub fn get_code(&self) -> Vec<Line> {
        self.code.clone()
    }
}
