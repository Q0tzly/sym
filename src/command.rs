use std::env;
use std::process;

use crate::{error::SymError, utils};

enum Command {
    Help,
    Run(String),
    Version,
}

pub struct Commands {
    command: Command,
}

impl Commands {
    pub fn new() -> Result<Self, SymError> {
        let args: Vec<String> = env::args().collect();

        let command = if args.len() == 3 && args[1] == "run" {
            Ok(Command::Run(args[2].clone()))
        } else if args.len() == 2 {
            match args[1].as_str() {
                "help" => Ok(Command::Help),
                "version" => Ok(Command::Version),
                "run" => Err(SymError::NotEnoughArguments(
                    "File path not found".to_string(),
                )),
                cmd => Err(SymError::UnknownCommand(cmd.to_string())),
            }
        } else if args.len() < 3 {
            Err(SymError::NotEnoughArguments(args.len().to_string()))
        } else {
            Err(SymError::ManyArguments)
        };

        Ok(Self { command: command? })
    }

    pub fn run(self) -> Option<Vec<String>> {
        match self.command {
            Command::Run(file_name) => utils::read_lines(&file_name),
            Command::Help => {
                Self::help();
                None
            }
            Command::Version => {
                Self::version();
                None
            }
        }
    }

    fn help() {
        println!(
            "Sym Lang's runner\n\nUsage: sym [COMMAND]\n\nCommands:\n  run [FILE PATH]    run a code\n  help               seable infomations for help\n  version            seable sym's version"
        );
        process::exit(0);
    }

    fn version() {
        println!("sym {}", env!("CARGO_PKG_VERSION"));
        process::exit(0);
    }
}

#[cfg(test)]
mod tests {
    /*
    use super::*;
    use std::env;

    fn set_args(args: Vec<&str>) {
        unsafe {
            env::set_var("CARGO_PKG_VERSION", "0.1.0");
            let args_string = args.join(" ");
            //let args_vec: Vec<String> = args.iter().map(|s| s.to_string()).collect();
            env::set_var("ARGS", args_string);
            env::set_current_dir(env::current_dir().unwrap()).unwrap();
        }
    }

    #[test]
    fn test_run_command() {
        let args = vec!["sym", "run", "test_file.sym"];
        set_args(args);

        let cmd = Commands::new();
        assert!(matches!(cmd.command, Command::Run(file) if file == "test_file.sym"))
    }

    #[test]
    fn test_help_command() {
        let args = vec!["sym", "help"];
        set_args(args);

        let cmd = Commands::new();
        assert!(matches!(cmd.command, Command::Help))
    }

    #[test]
    fn test_version_command() {
        let args = vec!["sym", "version"];
        set_args(args);

        let cmd = Commands::new();
        assert!(matches!(cmd.command, Command::Version));
    }

    #[test]
    fn test_no_args_error() {
        let args = vec!["sym"];
        set_args(args);

        let cmd = Commands::new();
        assert!(matches!(cmd.command, Command::Unknown));
    }

    #[test]
    fn test_unknown_command_error() {
        let args = vec!["sym", "hoge"];
        set_args(args);

        let cmd = Commands::new();
        assert!(matches!(cmd.command, Command::Unknown));
    }
    */
}
