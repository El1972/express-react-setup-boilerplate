<script>
You must inclde in react-frontend package.json proxy, which is
express localhost address:

{
  "name": "react-frontend",
  "version": "0.1.0",
  "proxy": "http://localhost:4444/",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
}

</script>