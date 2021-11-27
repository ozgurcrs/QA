import animationData from '../lotties/success.json';
import tryAgainData from '../lotties/try-again.json';
import loadingData from '../lotties/loading.json';
import failData from '../lotties/error.json';

export const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
export const defaultFailOptions = {
    loop: false,
    autoplay: true,
    animationData: failData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
export const defaultTryAgainOptions = {
    loop: false,
    autoplay: true,
    animationData: tryAgainData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const defaultLoadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};