'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projetos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      statusConsulta: {
        type: Sequelize.BOOLEAN,
        default: 0
      },
      elemento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      areaTotal: {
        type: Sequelize.INTEGER
      },
      geometry: {
        type: Sequelize.GEOMETRY
      },
      ultimaAtualizacao: {
        type: Sequelize.DATEONLY
      },
      id_origens: {
        type: Sequelize.INTEGER,
        references: {
          model: 'origens',
          key: 'id'
        },
        allowNull: false
      },
      id_propostas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'propostas',
          key: 'id'
        },
        allowNull: false
      },
      id_categorias: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categorias',
          key: 'id'
        },
        allowNull: false
      },
      id_proponentes: {
        type: Sequelize.INTEGER,
        references: {
          model: 'proponentes',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projetos');
  }
}
