var tl1 = gsap.timeline();
tl1.from("#left_nav p",{
    x:-400,
    duration:1,
});
tl1.from("#middle_nav a",{
    y:-200,
    duration:.8,
    stagger:.2
});
tl1.from("#heading_1",{
    scale:0,
    duration:1
})
gsap.from("#signup",{
    x:400,
    duration:1
});
gsap.from("#heading h1",{
    opacity:0,
    duration:1.5
});
gsap.from("#img1",{
    x:-300,
    delay:.3,
    stagger:1,
    duration:2
});
tl1.from("#img2",{
    scale:0,
    duration:1
});
tl1.from("#box1 p, #book_a_call",{
    opacity:0,
    stagger:.5,
    duration:1
});
gsap.from("#page2_left_child1_1",{
    scale:.6,
    scrollTrigger:{
        trigger:"#page2_left_child1_1",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 70%",
        end:"bottom 30%"
    }
});
gsap.from("#page2_left_child2_1,#page2_left_child2_2,#page2_left_child2_3",{
    scale:0,
    stagger:.5,
    scrollTrigger:{
    trigger:"#page2_left_child2_1,#page2_left_child2_2,#page2_left_child2_3",
    scroller:"body",
    // markers:true,
    scrub:2,
    start:"top 90%",
    end:"bottom 50%",
}   
});
gsap.from("#page2_box1",{
    x:-500,
    duration:1,
    scrollTrigger:"#page2_box1",
});
gsap.from("#page2_box2",{
    x:500,
    duration:1,
    scrollTrigger:"#page2_box2",
});
gsap.from("#page2_box3",{
    x:-500,
    duration:1,
    scrollTrigger:"#page2_box3",
});

