const resolveRoutes = (route) => {
    if(route.length <= 3) {
        let validRute = route === '/' ? route :  '/:id'
        return validRute
    }

    return`/${route}`
}

export default resolveRoutes