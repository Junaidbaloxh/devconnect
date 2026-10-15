export function errorHandler(err, req, res, next)
{
    if (req.headersSent)
    {
        return next(err);
    }

    const statusCode =
        Number.isInteger(err.statusCode) && err.statusCode >= 400 && err.statusCode <= 599 ? err.statusCode : 500;
    
    if (statusCode >= 500)
    {
        console.error(err);
    }

    return res.status(statusCode).json({
        success: false,
        message: statusCode >= 500 && process.env.NODE_ENV === "production" ? "Internal server error" : err.message || "Something went wrong",
    });
}
