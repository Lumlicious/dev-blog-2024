import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  language: string;
  codestring: string;
}

const CodeBlock = ({ language, codestring }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        fontSize: "1em",
      }}
      codeTagProps={{
        style: {
          fontSize: "inherit",
        },
      }}
      PreTag="div"
      showLineNumbers={true}
    >
      {codestring}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
