// AdSense reklamları devre dışı bırakıldı

window.adsbygoogle = window.adsbygoogle || [];

function InitSDKJs() {
    console.log("SDK Init - Reklamlar devre dışı");
    
    // myGameInstance hazır olana kadar bekle
    function waitForInstance() {
        if (myGameInstance && myGameInstance.SendMessage) {
            console.log("myGameInstance ready, sending InitSucceed");
            myGameInstance.SendMessage('RHMAdsManager', 'InitSucceed', 'ca-pub-8349441957149316');
        } else {
            console.log("Waiting for myGameInstance...");
            setTimeout(waitForInstance, 100);
        }
    }
    waitForInstance();
}

function CallInterstitialAdsJs() {
    console.log("Interstitial Ads atlandı");
    resumeGameAfterAds();
}

function LoadRewardedAdsJs() {
    console.log("LoadRewardedAds atlandı");
    RewardedAdsLoaded();
}

function CallRewardedAdsJs() {
    console.log("Rewarded Ads atlandı - Ödül direkt verildi");
    RewardSuccessful();
}

function RewardedAdsLoaded() {
    console.log("Rewarded Ads Available (simüle)");
    if (myGameInstance && myGameInstance.SendMessage) {
        myGameInstance.SendMessage('RHMAdsManager', 'isRewardedAdsLoaded', 'true');
    }
}

function RewardedAdsNotLoaded() {
    console.log("Rewarded Ads Not Available");
    if (myGameInstance && myGameInstance.SendMessage) {
        myGameInstance.SendMessage('RHMAdsManager', 'isRewardedAdsLoaded', 'false');
    }
}

function RewardedAdsDismissed() {
    console.log("Reward Dismissed");
    if (myGameInstance && myGameInstance.SendMessage) {
        myGameInstance.SendMessage('RHMAdsManager', 'RewardedAdsFailed');
    }
}

function RewardSuccessful() {
    console.log("gainReward");
    if (myGameInstance && myGameInstance.SendMessage) {
        myGameInstance.SendMessage('RHMAdsManager', 'RewardedAdsSuccessfull');
    }
}

function pauseGameBeforeAds() {
    if (myGameInstance && myGameInstance.SendMessage) {
        myGameInstance.SendMessage('RHMAdsManager', 'pauseGame');
    }
}

function resumeGameAfterAds() {
    if (myGameInstance && myGameInstance.SendMessage) {
        myGameInstance.SendMessage('RHMAdsManager', 'resumeGame');
    }
}