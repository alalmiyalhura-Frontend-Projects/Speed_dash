<template>
    <ul class="lessons_list">
        <!-- START:: LESSON -->
        <li>
            <router-link class="lesson" to="/course-videos">
                <span class="lesson_number"> 01 </span>
                <p class="lesson_details">
                    <span class="name"> المقدمة </span>
                    <span class="lesson_status done">
                        <i class="fas fa-circle"></i>
                        إنتهت
                    </span>
                </p>
            </router-link>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li>
            <router-link class="lesson" to="/course-videos">
                <span class="lesson_number"> 02 </span>
                <p class="lesson_details">
                    <span class="name"> نظرة سريعة </span>
                    <span class="lesson_status running">
                        <i class="fas fa-circle"></i>
                        جاري الأن
                    </span>
                </p>
            </router-link>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li>
            <router-link class="lesson" to="/course-videos">
                <span class="lesson_number"> 03 </span>
                <p class="lesson_details">
                    <span class="name"> ما سيتم إنجازه في هذا الكورس </span>
                    <span class="sub_details"> 24 يناير 2022 </span>
                </p>
            </router-link>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li>
            <router-link class="lesson" to="/course-videos">
                <span class="lesson_number"> 04 </span>
                <p class="lesson_details">
                    <span class="name"> الفصل الأول : الجهاز التنفسي </span>
                    <span class="sub_details"> 24 يناير 2022 </span>
                </p>
            </router-link>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li>
            <router-link class="lesson" to="/course-videos">
                <span class="lesson_number"> 05 </span>
                <p class="lesson_details">
                    <span class="name"> الفصل الأول : الجهاز التنفسي </span>
                    <span class="sub_details"> 24 يناير 2022 </span>
                </p>
            </router-link>
        </li>
        <!-- END:: LESSON -->
    </ul>
</template>

<script>
export default {
    name: "linksLessonsList",

    props: ["type"],
};
</script>
