use core::panic;
use std::fs::read_to_string;
use std::io::{self, BufRead, Read};

pub fn read_lines(filename: &str) -> Option<Vec<String>> {
    match read_to_string(filename) {
        Ok(code) => Some(code.lines().map(String::from).collect()),
        Err(_) => None,
    }
}

pub fn input_from_char() -> u8 {
    let mut buffer = [0; 1];

    match io::stdin().read(&mut buffer) {
        Ok(1) => buffer[0],
        Ok(_) => panic!("Failed to read a single byte!"),
        Err(e) => panic!("Error reading from stdin: {}", e),
    }
}

pub fn input_from_u8() -> u8 {
    let mut strs = String::new();
    let mut buffer = String::new();

    io::stdin().lock().read_line(&mut strs).unwrap();

    for c in strs.chars().take(3) {
        if c.is_ascii_digit() {
            buffer.push(c);
        } else {
            panic!("Must input 3 chars!\nex: 001");
        }
    }

    match buffer.parse::<u8>() {
        Ok(n) => n,
        Err(_) => panic!("Faild to parse str to u8!"),
    }
}

pub fn out_as_char(i: u8) {
    if i.is_ascii() {
        print!("{}", i as char);
    } else {
        panic!("")
    }
}

pub fn out_as_u8(i: u8) {
    print!("{}", i);
}
