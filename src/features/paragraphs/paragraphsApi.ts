import { client } from '../../services/client';

const DEFAULT_PARAMS = {
  type: 'meat-and-filler',
  paras: 10,
}

export const fetchParagraphs = async () => {
  return client.get<string[]>('/', { params: DEFAULT_PARAMS });
}
