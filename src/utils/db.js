import config from '../../config.json';
import knex from 'knex';

export default knex({
  client: config.client,
  connection: config.connection
});
