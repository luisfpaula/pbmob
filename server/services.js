/*ServiceConfiguration.configurations.upsert(
    {service: "facebook"},
    {
        $set: {
            appId: "186789241718943",
            secret: "452753d01a687d3a6a245bffc3f140da"
        }
    }
);*/

ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '186789241718943',
    secret: '452753d01a687d3a6a245bffc3f140da'
});