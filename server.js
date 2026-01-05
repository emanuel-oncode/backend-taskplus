import { app } from "./src/app.js";
import { PORT, NODE_SERVER } from "./src/Config/env.config.js";

app.listen(PORT, () => {
  if (NODE_SERVER === "development") {
    console.log(`SERVER IN MODE ${NODE_SERVER}`);
    console.log(`URL server: http://localhost:${PORT}`);
  }
});
