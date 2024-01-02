/**
 * @description make the hoc async function with promise
 * @param {*} fn
 * @returns
 */
const asyncHandler = (fn) => async (error, req, res, next) => {
  Promise.resolve(fn(error, req, res, next)).catch((err) => next(err));
};

/**
 * @description make the hoc async function with async await
 * @param {*} fn
 * @returns
 */
const asyncHandler2 = (fn) => async (error, req, res, next) => {
  try {
    await fn(error, req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
