export const getSession = async () => {
    await new Promise((resolve)=>setTimeout(resolve,1000))
    //return
    return {
        username: "sinan",
        email: "sinankocakdev@gmail.com",
        role: "admin"
    }
}

// bu bölümde sahte bir oturum oluşturuyoruz.