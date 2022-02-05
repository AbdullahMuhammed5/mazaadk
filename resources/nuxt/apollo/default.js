import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default ctx => {
  // console.log('apollo init', ctx)
  const uri = "http://www.qourota.io/api";
  const httpLink = new HttpLink({ uri });

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    const token = ctx.app.$auth.$storage.getUniversal('_token.localQL')
    if (token) {
      operation.setContext({
        headers: {
          authorization: token
        }
      });
    }

    return forward(operation, forward);
  });

  const link = middlewareLink.concat(httpLink);

  return {
    link,
    cache: new InMemoryCache()
  };
};
