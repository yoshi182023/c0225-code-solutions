# command-line-basics-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a CLI?
  **command-line interfaces.**
- What is a GUI?
  **a graphical user interface aka GUI.**
- Give at least one use case for each of the commands listed in this exercise.

  - `man`
  - `cat` **print the contents of .txt to your terminal.**
    **cat - concatenate files and print on the standard output**
    SYNOPSIS
    DESCRIPTION
    Concatenate FILE(s) to standard output.

          With no FILE, or when FILE is -, read standard input.

          -A, --show-all
                 equivalent to -vET

          -b, --number-nonblank
                 number nonempty output lines, overrides -n

  - `ls`
    ls - **list directory contents**

SYNOPSIS
ls [OPTION]... [FILE]...
**List information about the FILEs (the current directory by default). Sort en‐**
tries alphabetically if none of -cftuvSUX nor --sort is specified.

       Mandatory arguments to long options are mandatory for short options too.

       -a, --all
              do not ignore entries starting with .

       -A, --almost-all
              do not list implied . and ..

      -F, --classify
              append indicator (one of */=>@|) to entries

- `pwd`
  pwd - **print name of current/working directory**
  **when need to print file path**
  pwd [OPTION]...

Print the full filename of the current working directory.

       -L, --logical
              use PWD from environment, even if it contains symlinks

       -P, --physical
              avoid all symlinks

       --help display this help and exit

       --version
              output version information and exit

       If no option is specified, -P is assumed.

       NOTE:  your  shell may have its own version of pwd, which usually supersedes the ver‐
       sion described here.  Please refer to your shell's documentation  for  details  about
       the options it supports.

- `echo`
  NAME
  **echo - display a line of text**
  **print some text to the terminal**
  SYNOPSIS
  echo [SHORT-OPTION]... [STRING]...
  echo LONG-OPTION

Echo the STRING(s) to standard output.

       -n     do not output the trailing newline

       -e     enable interpretation of backslash escapes

       -E     disable interpretation of backslash escapes (default)

       --help display this help and exit

       --version
              output version information and exit

       If -e is in effect, the following sequences are recognized:

       \\     backslash

- `touch`
  NAME
  **touch - change file timestamps**
  **create empty file**

  touch [OPTION]... FILE...
  Update the access and modification times of each FILE to the current time.

         A FILE argument that does not exist is created empty, unless -c or -h is supplied.

         A FILE argument string of - is handled specially and causes touch to change the times
         of the file associated with standard output.

         Mandatory arguments to long options are mandatory for short options too.

         -a     change only the access time

- `mkdir`

  **mkdir - make directories**

SYNOPSIS
mkdir [OPTION]... DIRECTORY...

DESCRIPTION
Create the DIRECTORY(ies), if they do not already exist.

       Mandatory arguments to long options are mandatory for short options too.


       -p, --parents
              no error if existing, make parent directories as needed



       --context[=CTX]
              like -Z, or if CTX is specified then set the SELinux or SMACK security context
              to CTX

- `mv`
  **rename files**

SYNOPSIS
mv [OPTION]... [-T] SOURCE DEST
mv [OPTION]... SOURCE... DIRECTORY
mv [OPTION]... -t DIRECTORY SOURCE...
**Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.**

       Mandatory arguments to long options are mandatory for short options too.

- `rm`

**rm - remove files or directories**

SYNOPSIS
**rm [OPTION]... [FILE]...**

DESCRIPTION
**rm removes each specified file. By default, it does not remove directories.**

       If  the  -I  or --interactive=once option is given, and there are more than three files or the -r, -R, or --recursive are given,
       then rm prompts the user for whether to proceed with the entire operation.  If the response is not affirmative, the entire  com‐
       mand is aborted.

       Otherwise,  if a file is unwritable, standard input is a terminal, and the -f or --force option is not given, or the -i or --in‐
       teractive=always option is given, rm prompts the user for whether to remove the file.  If the response is not  affirmative,  the
       file is skipped.

- `cp`

NAME
**cp - copy files and directories**

**Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.**

       Mandatory arguments to long options are mandatory for short options too.

       -a, --archive
              same as -dR --preserve=all

       --attributes-only

**history - GNU History Library**
**Many programs read input from the user a line at a time. The GNU History library is able to keep track of those lines, associate arbitrary data with each line, and utilize information from previous lines in composing new ones.**
The history library supports a history expansion feature that is identical to the history expansion in bash. This section describes what syntax features are available.
History expansions introduce words from the history list into the input stream, making it easy to repeat commands, insert the arguments to a previous command into the current input line, or fix errors in previous commands quickly.

- What are the three virtues of a great programmer?

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
