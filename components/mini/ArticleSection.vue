<template>
  <div class="article_section_container">
    <div class="article_section" data-aos="zoom-in">
      <img :src="mainImgSrc" alt="الصورة الرئيسية للمقالة" />
      <div class="article_head_title" v-if="withArticleTitle">
        <nuxt-link :to="catPath" data-aos="zoom-in" data-aos-delay="700">
          {{ catTitle }}
        </nuxt-link>
        <h1 data-aos="fade-up" data-aos-delay="700">{{ mainHead }}</h1>
        <span data-aos="fade-up" data-aos-delay="700">
          {{ articleDate }}
        </span>
      </div>
    </div>
    <div
      class="article_body"
      v-html="cleanedArticleBody"
      data-aos="fade-up"
      data-aos-duration="3000"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  withArticleTitle: {
    type: Boolean,
  },
  mainHead: {
    type: String,
  },
  articleDate: {
    type: String,
  },
  catTitle: {
    type: String,
    required: true,
  },
  catPath: {
    type: String,
    required: true,
  },
  articleBody: {
    type: String,
    required: true,
  },
  mainImgSrc: {
    type: String,
  },
});

const cleanedArticleBody = computed(() => {
  if (!props.articleBody) return "";

  let cleanedContent = props.articleBody.replace(/<p>(&nbsp;|\s)*<\/p>/g, "");

  cleanedContent = cleanedContent.replace(
    /<img(.*?)\/?>/g,
    (match, attributes) => {
      const altMatch = attributes.match(/alt="(.*?)"/);
      const altText = altMatch ? altMatch[1] : "";

      return `<img ${attributes} title="${altText}" /><span class="image-description">${altText}</span>`;
    }
  );

  return cleanedContent;
});
</script>

<style lang="scss">
.article_section_container {
  margin: 0 auto;
  max-width: 900px;
  .article_section {
    position: relative;
    box-shadow: var(--shadow);
    border-radius: var(--md_border_rd);
    overflow: hidden;
    div.article_head_title {
      position: absolute;
      top: 0px;
      background-color: rgba(0, 0, 0, 0.7);
      width: 100%;
      min-height: 80px;
      padding: 1rem;
      @include flex(center, flex-start, column, 5px);
      h1 {
        text-align: justify;
        font-size: 1.2rem;
        font-weight: bold;
        width: fit-content;
        color: var(--white);
      }
      a {
        color: rgba(255, 255, 255, 0.7);
        transition: var(--main_transition);
        display: flex;
        width: fit-content;
        margin: 0.5rem;
        text-decoration: underline;
      }
      span {
        color: white;
        font-weight: lighter;
      }
      &:hover {
        a {
          color: var(--white);
        }
      }
      @media (max-width: 992px) {
        min-height: unset;
        height: auto;
      }
      @media (max-width: 768px) {
        padding: 0.5rem;
        h1 {
          font-size: 1rem;
        }
        a {
          font-size: 0.7rem;
          margin: 0;
          margin: 0;
        }
        span {
          font-size: 0.8rem;
        }
      }
      @media (max-width: 480px) {
        padding: 0.5rem;
        h1 {
          font-size: 0.8rem;
        }
        span {
          font-size: 0.6rem;
        }
      }
    }
  }
  .image-description {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }
  .article_body {
    h2,
    h3 {
      font-size: 1.4rem;
      text-align: justify;
    }

    .image {
      margin-bottom: 1rem;
    }

    ul {
      li {
        text-align: justify;
      }
    }
    @media (max-width: 992px) {
      h2,
      h3 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: 480px) {
      h2,
      h3 {
        font-size: 1rem;
      }
      .image img {
        border-radius: 5px !important;
      }
      p {
        font-size: 0.9rem;
      }
      ul {
        li {
          font-size: 0.9rem;
        }
      }
    }
  }
}
</style>
