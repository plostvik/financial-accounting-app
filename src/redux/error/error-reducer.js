import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "../auth/index";
import transactionsActions from "../transaction/transaction-actions";

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.registerRequest]: () => null,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.loginRequest]: () => null,
  [authActions.logOutError]: (_, { payload }) => payload,
  [authActions.logoutRequest]: () => null,
  [authActions.loginWithGoogleError]: (_, { payload }) => payload,
  [authActions.loginWithGoogleRequest]: () => null,

  //TODO добавить очистку ошибки при реквестах
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [transactionsActions.addIncomesError]: (_, { payload }) => payload,
  [transactionsActions.deleteCostsError]: (_, { payload }) => payload,
  [transactionsActions.addCostsError]: (_, { payload }) => payload,
});

export default error;
