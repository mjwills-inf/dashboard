const TweetGroup = () => {
  
  let accounts = []

  const getAccounts = () => accounts;

  const addAccount = (account) => {
    accounts.push(account)
  }
  const removeAccount = (account) => {
    // find via account id(?) then rmove
  }
  
  return {
    getAccounts,
    addAccount,
    removeAccount
  }
}

export default TweetGroup;