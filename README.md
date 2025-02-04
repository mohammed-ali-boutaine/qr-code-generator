# Installation and Usage

To install the necessary dependencies, run the following command:

```sh
npm install
```

To start the application, run:

```sh
node index.js
```

# How to Use Links

When adding a link, make sure to include the `http` or `https` protocol at the beginning of the URL. This ensures that the link is properly recognized and clickable.

## Example

```markdown
[Example Link](http://www.example.com)
```

In the example above, the link will direct users to `http://www.example.com`.

## Common Mistakes

- Omitting the protocol:
  ```markdown
  [Example Link](www.example.com)  // This will not work correctly.
  ```

- Using an incorrect protocol:
  ```markdown
  [Example Link](ftp://www.example.com)  // This is not a web link.
  ```

Always double-check your links to ensure they start with `http://` or `https://`.
