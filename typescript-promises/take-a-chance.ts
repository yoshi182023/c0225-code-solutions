// returns a Promise that resolves to a string after waiting for the specified number of seconds

export function takeAChance(name: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() <= 0.5
        ? resolve(`Hooray! You're so lucky, ${name}!`)
        : reject(new Error(`It's just bad luck, ${name}.`));
    }, 2000);
  });
}
