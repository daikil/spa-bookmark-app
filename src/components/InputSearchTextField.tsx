import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { validateInputSearchText, getErrorMessage } from "@/validate";
import { useRouter } from "next/navigation";

export const InputSearchTextField = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const result = validateInputSearchText(searchText);

    if (!result.success) {
      setErrorMessage(getErrorMessage(result)?.root?.[0] ?? "");
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setHasError(false);
    setErrorMessage("");
    setIsLoading(false);

    const params = new URLSearchParams({
      search: result.output,
    });

    router.replace(`/search/result?${params.toString()}`);
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
          id="keyword"
          label="キーワード"
          type="text"
          variant="outlined"
          className="w-full"
          value={searchText}
          helperText={errorMessage}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          error={hasError}
        />
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          className="w-full"
          type="submit"
          disabled={isLoading}
        >
          検索
        </Button>
      </Box>
    </Box>
  );
};
