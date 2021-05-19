// Middleware para verificar que esté log y restringir acceso

function authMiddleware(req,res,next) {
    if(!req.session.userLogged){
        return res.redirect("/users/login");
    }
    next();
}

module.exports = authMiddleware;