Page({
    data: {
        webViewUrl: ''
    },
    onLoad: function (options) {
        console.log('Fingo loaded');
    },
    onMessage: function (e) {
        console.log('Message from H5:', e.detail.data);
        // Handle specific actions from H5
        const data = e.detail.data;
        if (data && data.action === 'start_lesson') {
            wx.showToast({
                title: 'Starting Lesson!',
                icon: 'success'
            });
        }
    }
});
