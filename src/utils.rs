use std::fs::read_to_string;
use std::io::{self, BufRead, Read};

use crate::error::SymError;

pub fn read_lines(filename: &str) -> Option<Vec<String>> {
    match read_to_string(filename) {
        Ok(code) => Some(code.lines().map(String::from).collect()),
        Err(_) => None,
    }
}

pub fn input_from_char() -> Result<u8, SymError> {
    let mut buffer = [0; 1];

    match io::stdin().read(&mut buffer) {
        Ok(1) => Ok(buffer[0]),
        Ok(_) => Err(SymError::IOError(
            "Failed to read a single byte!".to_string(),
        )),
        Err(e) => Err(SymError::IOError(format!(
            "Error reading from stdin: {}",
            e
        ))),
    }
}

pub fn input_from_u8() -> Result<u8, SymError> {
    let mut strs = String::new();
    let mut buffer = String::new();

    io::stdin().lock().read_line(&mut strs).unwrap();

    for c in strs.chars().take(3) {
        if c.is_ascii_digit() {
            buffer.push(c);
        } else {
            return Err(SymError::IOError(
                "Must input 3 chars!\nex: 001".to_string(),
            ));
        }
    }

    match buffer.parse::<u8>() {
        Ok(n) => Ok(n),
        Err(_) => Err(SymError::IOError("Faild to parse str to u8!".to_string())),
    }
}

pub fn out_as_char(i: u8) {
    if i.is_ascii() {
        print!("{}", i as char);
    }
}

pub fn out_as_u8(i: u8) {
    print!("{}", i);
}
