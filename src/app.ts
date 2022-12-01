import server from './server'

server.listen(process.env.PORT || 3333, () => console.log("Server is running on PORT 3333"))