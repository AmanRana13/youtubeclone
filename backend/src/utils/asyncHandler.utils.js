/**
 * @description make the hoc async function with promise
 * @param {*} fn
 * @returns
 */
export const asyncHandler = (fn) => async (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

/**
 * @description make the hoc async function with async await
 * @param {*} fn
 * @returns
 */
const asyncHandler2 = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
