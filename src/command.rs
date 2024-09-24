use std::env;

enum Command {
    Help,
    Run(String),
    Version,
    Unknown,
}

pub struct Commands {
    command: Command,
}

impl Commands {
    pub fn new() -> Self {
        let args: Vec<String> = env::args().collect();

        let command = if args.len() == 3 && args[1] == "run" {
            Command::Run(args[2].clone())
        } else if args.len() == 2 {
            match args[1].as_str() {
                "help" => Command::Help,
                "version" => Command::Version,
                _ => Command::Unknown,
            }
        } else {
            Command::Unknown
        };

        Commands { command }
    }

    pub fn run_cmd(self) {
        match self.command {
            Command::Run(file_name) => todo!(),
            Command::Help => Self::help(),
            Command::Version => Self::version(),
            _ => Self::error(),
        }
    }

    fn help() {
        println!(
            "Sym Lang's runner\n\nUsage: sym [COMMAND]\n\nCommands:\n  run [FILE PATH]    run a code\n  help               seable infomations for help\n  version            seable sym's version"
        )
    }

    fn error() {
        println!(
            "error: no such command\n\n    If you want to see help, run this command 'sym help'"
        )
    }

    fn version() {
        println!("sym {}", env!("CARGO_PKG_VERSION"))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::env;

    fn set_args(args: Vec<&str>) {
        unsafe {
            env::set_var("CARGO_PKG_VERSION", "0.1.0"); // Set version for testing
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
}
