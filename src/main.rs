use sym_lang::command::Commands;
use sym_lang::error::SymError;
use sym_lang::parse::{Line, Parser};
use sym_lang::vm::VM;

fn main() -> Result<(), SymError> {
    let code = get_code()?;
    let parsed_code = parse_code(code)?;
    run_vm(parsed_code)?;
    Ok(())
}

fn get_code() -> Result<Vec<String>, SymError> {
    let cmd = Commands::new()?;
    cmd.run().ok_or(SymError::NoCodeProvided)
}

fn parse_code(code: Vec<String>) -> Result<Vec<Line>, SymError> {
    let mut parser = Parser::new(code);
    parser.parse()?;
    Ok(parser.get_code())
}

fn run_vm(code: Vec<Line>) -> Result<(), SymError> {
    let mut vm = VM::new(code);
    vm.run()?;
    Ok(())
}
