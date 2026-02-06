import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Box, IconButton, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = 'javascript',
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        my: 2,
        bgcolor: '#1e1e1e',
        border: '1px solid #333',
      }}
    >
      {/* Header bar like VS Code */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          bgcolor: '#252526',
          borderBottom: '1px solid #333',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Traffic light dots */}
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: '#ff5f56',
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: '#ffbd2e',
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: '#27c93f',
              }}
            />
          </Box>
          {filename && (
            <Typography
              variant='caption'
              sx={{ color: '#808080', ml: 1, fontFamily: 'monospace' }}
            >
              {filename}
            </Typography>
          )}
        </Box>
        <IconButton
          size='small'
          onClick={handleCopy}
          sx={{ color: '#808080', '&:hover': { color: '#fff' } }}
          title='Copy code'
        >
          {copied ? (
            <CheckIcon fontSize='small' />
          ) : (
            <ContentCopyIcon fontSize='small' />
          )}
        </IconButton>
      </Box>

      {/* Code content */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          background: 'transparent',
        }}
        lineNumberStyle={{
          color: '#6e7681',
          paddingRight: '1rem',
          minWidth: '2.5rem',
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </Box>
  );
}
