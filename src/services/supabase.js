import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'SUA_URL_DO_SUPABASE';
const supabaseKey = 'SUA_CHAVE_ANON_PUBLICA';

export const supabase = createClient(supabaseUrl, supabaseKey);

