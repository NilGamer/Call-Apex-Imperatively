public with sharing class AccountManager {
    
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccount(Integer numOfRecords) {
        return [Select Id,Name,Phone from Account limit : numOfRecords];
    }
}
