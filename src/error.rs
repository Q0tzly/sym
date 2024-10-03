#[derive(Debug)]
pub enum SymError {
    NotEnoughArguments(String),
    ManyArguments,
    NoSuchFile(String),
    UnknownCommand(String),

    NoCodeProvided,
    UnknownInstruction(String),

    StackUnderflow,

    IOError(String),
}
