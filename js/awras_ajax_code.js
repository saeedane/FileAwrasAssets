$(".more-post").click(function (t) {
        return (
            t.preventDefault(),
            
            $.ajax({
                type: "POST",
                url: wpc_vars.ajax_url,
                data: { action: "get_ajax_posts_view_by_mouth" },
                success: function (t) {
                    $("#posts-area").html(t), $(".mostReadeTitle").html("الأكثر قراءة هذا الشهر");
		
						

					
                },
            }),
            !1
        );
    }),
        $(".get-post-by-week").click(function (t) {
            return (
                t.preventDefault(),
                $.ajax({
                    type: "POST",
                    url: wpc_vars.ajax_url,
                    data: { action: "get_ajax_posts_view_by_week" },
                    success: function (t) {
						$("#posts-area").html(t), $(".mostReadeTitle").html("الأكثر قراءة هذا الأسبوع");
                    },
                }),
                !1
            );
        }),
        $(document).on("click", "#lineComent", function (t) {
            t.preventDefault();
            var e = jQuery(this).attr("data-nonce");
            $(this).children().attr("colors", "primary:#ff0000,secondary:#ff0000"),
                $(".dislike").children().attr("colors", "primary:#000000,secondary:#000000"),
                $.ajax({
                    type: "POST",
                    url: wpc_vars.ajax_url,
                    dataType: "JSON",
                    data: "action=pt_like_it&comment_id=" + jQuery(this).attr("data-comment-id") + "&nonce=" + e,
                    success: function () {
                        alert(" تم اضافة اعجاب");
                    },
                });
        }),
        $(document).on("click", "#dislikeComent", function (t) {
            t.preventDefault();
            var e = jQuery(this).attr("data-nonce");
            $(this).children().attr("colors", "primary:#ff0000,secondary:#ff0000"),
                $(".liked").children().attr("colors", "primary:#000000,secondary:#000000"),
                $.ajax({
                    type: "POST",
                    url: wpc_vars.ajax_url,
                    dataType: "JSON",
                    data: "action=pt_dislike_ite&comment_id=" + jQuery(this).attr("data-comment-id") + "&nonce=" + e,
                    success: function () {
                        alert("تم اضافة عدم اعجاب ");
                    },
                });
        });

	
    (function () {
        var t = function (t, e, a, n) {
            var r = a || 640,
                o = n || 320,
                i = window.screenLeft || window.screenX,
                c = window.screenTop || window.screenY,
                s = i + (window.innerWidth || document.documentElement.clientWidth) / 2 - r / 2,
                d = c + (window.innerHeight || document.documentElement.clientHeight) / 2 - o / 2;
            return window.open(t, e, "scrollbars=yes, width=" + r + ", height=" + o + ", top=" + d + ", left=" + s).focus(), !0;
        };
        $(".share_twitter").on("click", function (e) {
            e.preventDefault();
            var a = this.getAttribute("data-url"),
                n = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) + "&via=AwrasMedia&url=" + encodeURIComponent(a);
            t(n, "Partager sur Twitter");
        }),
            $(".share_facebook").on("click", function (e) {
                e.preventDefault();
                var a = this.getAttribute("data-url"),
                    n = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(a);
                t(n, "Partager sur facebook");
            });
    })();
