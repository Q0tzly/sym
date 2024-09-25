use sym::command::Commands;

fn main() {
    let cmd = Commands::new();
    if let Some(code) = cmd.run_cmd() {
        println!("{:?}", code);
    }
}
