const hasForeignKey = async (table, referencedTable, sequelize) => {
    const query = `
    SELECT COUNT(COLUMN_NAME) AS REFERENCE_COUNT
    FROM information_schema.KEY_COLUMN_USAGE
    WHERE
      TABLE_SCHEMA = 'SpotifyClone'
        AND TABLE_NAME = '${table}'
        AND REFERENCED_TABLE_NAME = '${referencedTable}'
        AND REFERENCED_COLUMN_NAME = (
        SELECT COLUMN_NAME
            FROM information_schema.KEY_COLUMN_USAGE
            WHERE TABLE_SCHEMA = 'SpotifyClone'
            AND TABLE_NAME = '${referencedTable}' AND CONSTRAINT_NAME = 'PRIMARY'
        );`;
    const [{ REFERENCE_COUNT: referenceCount }] = await sequelize.query(
      query,
      { type: 'SELECT' },
    );

    return (referenceCount === 1);
  };

const composedPrimaryKey = async (table, sequelize) => {
    const query = `
    SELECT COUNT(COLUMN_NAME) AS PK_COUNT
    FROM information_schema.KEY_COLUMN_USAGE
    WHERE TABLE_SCHEMA = 'SpotifyClone'
    AND TABLE_NAME = '${table}' AND CONSTRAINT_NAME = 'PRIMARY';`;

    const [{ PK_COUNT: pkCount }] = await sequelize.query(
      query,
      { type: 'SELECT' },
    );

    return (pkCount > 1);
  };

  module.exports = { hasForeignKey, composedPrimaryKey };
