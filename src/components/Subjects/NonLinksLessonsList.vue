<template>
    <ul class="lessons_list">
        <!-- START:: LESSON -->
        <li class="lesson">
            <span class="lesson_number"> 01 </span>
            <p class="lesson_details">
                <span class="name"> المقدمة </span>
                <span class="lesson_status done" v-if="type == 'online'">
                    <i class="fas fa-circle"></i>
                    إنتهت
                </span>
                <span class="lesson_duration" v-else>
                    <span>6 ساعات </span>
                    <span>40 دقيقة </span>
                </span>
            </p>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li class="lesson">
            <span class="lesson_number"> 02 </span>
            <p class="lesson_details">
                <span class="name"> نظرة سريعة </span>
                <span class="lesson_status running" v-if="type == 'online'">
                    <i class="fas fa-circle"></i>
                    جاري الأن
                </span>
                <span class="lesson_duration" v-else>
                    <span>6 ساعات </span>
                    <span>40 دقيقة </span>
                </span>
            </p>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li class="lesson">
            <span class="lesson_number"> 03 </span>
            <p class="lesson_details">
                <span class="name"> ما سيتم إنجازه في هذا الكورس </span>
                <span class="sub_details" v-if="type == 'online'">
                    24 يناير 2022
                </span>
                <span class="lesson_duration" v-else>
                    <span>6 ساعات </span>
                    <span>40 دقيقة </span>
                </span>
            </p>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li class="lesson">
            <span class="lesson_number"> 04 </span>
            <p class="lesson_details">
                <span class="name"> الفصل الأول : الجهاز التنفسي </span>
                <span class="sub_details" v-if="type == 'online'">
                    24 يناير 2022
                </span>
                <span class="lesson_duration" v-else>
                    <span>6 ساعات </span>
                    <span>40 دقيقة </span>
                </span>
            </p>
        </li>
        <!-- END:: LESSON -->

        <!-- START:: LESSON -->
        <li class="lesson">
            <span class="lesson_number"> 05 </span>
            <p class="lesson_details">
                <span class="name"> الفصل الأول : الجهاز التنفسي </span>
                <span class="sub_details" v-if="type == 'online'">
                    24 يناير 2022
                </span>
                <span class="lesson_duration" v-else>
                    <span>6 ساعات </span>
                    <span>40 دقيقة </span>
                </span>
            </p>
        </li>
        <!-- END:: LESSON -->
    </ul>
</template>

<script>
export default {
    name: "NonLinksLessonsList",

    props: ["type"],
};
</script>
