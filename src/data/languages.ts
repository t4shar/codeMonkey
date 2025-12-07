export interface Language {
  id: number;
  name: string;
  monaco: string;
  template: string;
}

export const languages: Language[] = [
  {
    "id": 45,
    "name": "Assembly (NASM 2.14.02)",
    "monaco": "asm",
    "template": "section .data\n    msg db \"template, World!\",10\n    len equ $ - msg\nsection .text\n    global _start\n_start:\n    mov rax,1\n    mov rdi,1\n    mov rsi,msg\n    mov rdx,len\n    syscall\n    mov rax,60\n    xor rdi,rdi\n    syscall"
  },
  {
    "id": 46,
    "name": "Bash (5.0.0)",
    "monaco": "shell",
    "template": "echo \"template, World!\""
  },
  {
    "id": 47,
    "name": "Basic (FBC 1.07.1)",
    "monaco": "plaintext",
    "template": "PRINT \"template, World!\""
  },
  {
    "id": 110,
    "name": "C (Clang 19.1.7)",
    "monaco": "c",
    "template": "#include <stdio.h>\nint main(){ printf(\"template, World!\\n\"); return 0; }"
  },
  {
    "id": 105,
    "name": "C++ (GCC 14.1.0)",
    "monaco": "cpp",
    "template": "#include <iostream>\nint main(){ std::cout << \"template, World!\" << std::endl; }"
  },
  {
    "id": 86,
    "name": "Clojure (1.10.1)",
    "monaco": "clojure",
    "template": "(println \"template, World!\")"
  },
  {
    "id": 51,
    "name": "C# (Mono 6.6.0.161)",
    "monaco": "csharp",
    "template": "using System;\nclass Program { static void Main(){ Console.WriteLine(\"template, World!\"); } }"
  },
  {
    "id": 77,
    "name": "COBOL (GnuCOBOL 2.2)",
    "monaco": "cobol",
    "template": "IDENTIFICATION DIVISION.\nPROGRAM-ID. template.\nPROCEDURE DIVISION.\n    DISPLAY \"template, World!\".\n    STOP RUN."
  },
  {
    "id": 55,
    "name": "Common Lisp (SBCL 2.0.0)",
    "monaco": "lisp",
    "template": "(format t \"template, World!~%\")"
  },
  {
    "id": 56,
    "name": "D (DMD 2.089.1)",
    "monaco": "d",
    "template": "import std.stdio;\nvoid main(){ writeln(\"template, World!\"); }"
  },
  {
    "id": 90,
    "name": "Dart (2.19.2)",
    "monaco": "dart",
    "template": "void main() { print('template, World!'); }"
  },
  {
    "id": 57,
    "name": "Elixir (1.9.4)",
    "monaco": "elixir",
    "template": "IO.puts \"template, World!\""
  },
  {
    "id": 58,
    "name": "Erlang (OTP 22.2)",
    "monaco": "erlang",
    "template": "-module(template).\n-export([start/0]).\nstart() -> io:format(\"template, World!~n\")."
  },
  {
    "id": 87,
    "name": "F# (.NET Core SDK 3.1.202)",
    "monaco": "fsharp",
    "template": "printfn \"template, World!\""
  },
  {
    "id": 59,
    "name": "Fortran (GFortran 9.2.0)",
    "monaco": "fortran",
    "template": "program template\nprint *, \"template, World!\"\nend program template"
  },
  {
    "id": 107,
    "name": "Go (1.23.5)",
    "monaco": "go",
    "template": "package main\nimport \"fmt\"\nfunc main(){ fmt.Println(\"template, World!\") }"
  },
  {
    "id": 88,
    "name": "Groovy (3.0.3)",
    "monaco": "groovy",
    "template": "println \"template, World!\""
  },
  {
    "id": 61,
    "name": "Haskell (GHC 8.8.1)",
    "monaco": "haskell",
    "template": "main = putStrLn \"template, World!\""
  },
  {
    "id": 91,
    "name": "Java (JDK 17.0.6)",
    "monaco": "java",
    "template": "public class Main { public static void main(String[] args){ System.out.println(\"template, World!\"); } }"
  },
  {
    "id": 96,
    "name": "JavaFX (JDK 17.0.6, OpenJFX 22.0.2)",
    "monaco": "java",
    "template": "import javafx.application.Application;\nimport javafx.scene.*;\nimport javafx.scene.control.*;\nimport javafx.stage.Stage;\npublic class Main extends Application {\n  public void start(Stage stage){ stage.setScene(new Scene(new Label(\"template, World!\"), 200, 80)); stage.show(); }\n  public static void main(String[] args){ launch(args); }\n}"
  },
  {
    "id": 102,
    "name": "JavaScript (Node.js 22.08.0)",
    "monaco": "javascript",
    "template": "console.log(\"template, World!\")"
  },
  {
    "id": 111,
    "name": "Kotlin (2.1.10)",
    "monaco": "kotlin",
    "template": "fun main(){ println(\"template, World!\") }"
  },
  {
    "id": 64,
    "name": "Lua (5.3.5)",
    "monaco": "lua",
    "template": "print(\"template, World!\")"
  },
  {
    "id": 79,
    "name": "Objective-C (Clang 7.0.1)",
    "monaco": "objective-c",
    "template": "#import <Foundation/Foundation.h>\nint main(){ @autoreleasepool { NSLog(@\"template, World!\"); } return 0; }"
  },
  {
    "id": 65,
    "name": "OCaml (4.09.0)",
    "monaco": "ocaml",
    "template": "print_endline \"template, World!\""
  },
  {
    "id": 66,
    "name": "Octave (5.1.0)",
    "monaco": "matlab",
    "template": "disp('template, World!')"
  },
  {
    "id": 67,
    "name": "Pascal (FPC 3.0.4)",
    "monaco": "pascal",
    "template": "program template;\nbegin\n  writeln('template, World!');\nend."
  },
  {
    "id": 85,
    "name": "Perl (5.28.1)",
    "monaco": "perl",
    "template": "print \"template, World!\\n\";"
  },
  {
    "id": 98,
    "name": "PHP (8.3.11)",
    "monaco": "php",
    "template": "<?php\necho \"template, World!\";"
  },
  {
    "id": 69,
    "name": "Prolog (GNU Prolog 1.4.5)",
    "monaco": "prolog",
    "template": ":- initialization(main).\nmain :- write('template, World!'), nl."
  },
  {
    "id": 113,
    "name": "Python (3.14.0)",
    "monaco": "python",
    "template": "print(\"template, World!\")"
  },
  {
    "id": 99,
    "name": "R (4.4.1)",
    "monaco": "r",
    "template": "print(\"template, World!\")"
  },
  {
    "id": 72,
    "name": "Ruby (2.7.0)",
    "monaco": "ruby",
    "template": "puts \"template, World!\""
  },
  {
    "id": 108,
    "name": "Rust (1.85.0)",
    "monaco": "rust",
    "template": "fn main(){ println!(\"template, World!\"); }"
  },
  {
    "id": 112,
    "name": "Scala (3.4.2)",
    "monaco": "scala",
    "template": "@main def template = println(\"template, World!\")"
  },
  {
    "id": 82,
    "name": "SQL (SQLite 3.27.2)",
    "monaco": "sql",
    "template": "SELECT 'template, World!';"
  },
  {
    "id": 83,
    "name": "Swift (5.2.3)",
    "monaco": "swift",
    "template": "print(\"template, World!\")"
  },
  {
    "id": 101,
    "name": "TypeScript (5.6.2)",
    "monaco": "typescript",
    "template": "console.log(\"template, World!\")"
  },
  {
    "id": 84,
    "name": "Visual Basic.Net (vbnc 0.0.0.5943)",
    "monaco": "vb",
    "template": "Module template\n  Sub Main()\n    Console.WriteLine(\"template, World!\")\n  End Sub\nEnd Module"
  }
];
