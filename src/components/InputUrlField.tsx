import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { validateInputUrl, getErrorMessage } from "@/validate";

export const InputUrlField = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const result = validateInputUrl(inputUrl);

    if (!result.success) {
      setErrorMessage(getErrorMessage(result)?.root?.[0] ?? "");
      setIsError(true);
      setIsLoading(false);
      return;
    }

    await delay(1000);

    alert(`追加成功：${result}`);
    setIsError(false);
    setErrorMessage("");
    setInputUrl("");
    setIsLoading(false);
  };
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Box
        component="form"
        sx={{
          maxWidth: "sm",
          width: "96%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="url"
          label="URL"
          type="url"
          variant="outlined"
          className="w-full"
          value={inputUrl}
          helperText={errorMessage}
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          error={isError}
        />
        <Button
          variant="contained"
          endIcon={<SaveIcon />}
          className="w-full"
          type="submit"
          loading={isLoading}
        >
          保存
        </Button>
      </Box>
    </Box>
  );
};
