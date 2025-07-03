module.exports = (sequelize, DataType) => {
  const Notification = sequelize.define("Notification", {
    notificationId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataType.INTEGER,
      allowNull: false
    },
    type: {
      type: DataType.ENUM('candidature', 'entretien', 'rappel', 'message', 'info'),
      allowNull: false,
      defaultValue: 'info'
    },
    titre: {
      type: DataType.STRING,
      allowNull: false
    },
    message: {
      type: DataType.TEXT,
      allowNull: false
    },
    isRead: {
      type: DataType.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true
  });

  Notification.associate = (models) => {
    Notification.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  return Notification;
};
