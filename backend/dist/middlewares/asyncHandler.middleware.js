const asyncHandler = (handlerFunction) => (req, res, next) => {
    Promise.resolve(handlerFunction(req, res, next)).catch(next);
};
export default asyncHandler;
