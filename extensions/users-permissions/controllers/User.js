"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi
      .query("user", "users-permissions")
      .findOne({ id }, [
        "role",
        "booksBorrowed",
        {
          path: "booksBorrowed",
          populate: {
            path: "book",
          },
        },
        {
          path: "booksBorrowed",
          populate: {
            path: "issuedBy",
          },
        },
        {
          path: "booksBorrowed",
          populate: {
            path: "issuedTo",
          },
        },
      ]);

    return entity;
  },
};
