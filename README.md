# Atividade 09 - Notificacoes em Tempo Real (EngComp Alert)

Projeto pratico desenvolvido para a disciplina de Desenvolvimento de Aplicacoes Mobile - Prof. Maromo.

O objetivo do aplicativo e receber alertas em tempo real disparados a partir de eventos de insercao no banco de dados do Supabase (utilizando o Supabase Realtime via WebSockets), exibindo um alerta na interface do aplicativo sem a necessidade de recarregar a tela.

## Tecnologias utilizadas

- React Native com Expo
- Supabase (PostgreSQL + Realtime)
- React Native Alert

## Como executar o projeto

1. Clone o repositorio ou baixe os arquivos.
2. Instale as dependencias:
   ```bash
   npm install
   ```
3. Configure a URL e a chave anonima da sua instancia do Supabase no arquivo `src/services/supabase.js`.
4. Inicie o servidor Expo:
   ```bash
   npx expo start --tunnel
   ```
5. Abra o aplicativo Expo Go no celular e leia o QR Code gerado no terminal.

## Configuracao do Banco de Dados (Supabase)

Execute o script SQL contido no arquivo `database_setup.sql` no SQL Editor do painel do Supabase para criar a tabela `notifications`, habilitar as permissoes de acesso (RLS) e ativar a publicacao do Realtime.
