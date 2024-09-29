use sym::command::Commands;
use sym::parse::Parser;
use sym::vm::VM;

fn main() {
    let cmd = Commands::new();
    if let Some(code) = cmd.run() {
        let mut parser = Parser::new(code);
        parser.parse();

        let mut vm = VM::new(parser.get_code());
        vm.run();
    }
}
