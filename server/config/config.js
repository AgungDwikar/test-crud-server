const config = {
    env: process.env.NODE_ENV || "DEVELOPMENT",
    port: process.env.PORT || 3008,
    db_name: "semogaLolos",
    db_username: "postgres",
    db_password: "ganbatte",
    URL_DOMAIN: "/test",
    URL_IMAGE: "http://localhost:3008/test/api/propinsi/images/",
    URL_API: "/test/api",
    UPLOAD_DIR: "/storages",
};
export default config;
