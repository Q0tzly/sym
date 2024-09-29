use std::fs::read_to_string;

pub fn read_lines(filename: &str) -> Option<Vec<String>> {
    match read_to_string(filename) {
        Ok(code) => Some(code.lines().map(String::from).collect()),
        Err(_) => None,
    }
}

pub fn input() -> u8 {
    todo!()
}
pub fn out(i: u8) {
    print!("{}", i);
}
